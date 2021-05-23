<?php

use Kirby\Cms\Page;
use Kirby\Cms\Pages;
use Kirby\Http\Remote;
use Kirby\Http\Uri;
use Kirby\Toolkit\Str;

class DocsPage extends Page
{
  public function children()
  {
    $results = [];
    $pages   = [];

    $repository = 'https://api.github.com/repos/elyukai/optolith-client';
    $requestUri = new Uri($repository . '/contents/docs');
    $requestUri->setQuery([
      'ref' => 'feature/ocaml'
    ]);

    $request = Remote::request($requestUri->toString(), [
      'method' => 'GET',
      'agent' => 'elyukai',
      'headers' => [
        'accept' => 'application/vnd.github.v3+json'
      ]
    ]);

    if ($request->code() === 200) {
      $results = $request->json();
    } else {
      return $request->content();
    }

    foreach ($results as $result) {
      switch ($result['type']) {
        case 'file': {
            $pageRequest = Remote::get($result['download_url']);

            if ($pageRequest->code() === 200) {
              $fullContent = $pageRequest->content();
              $split = preg_split("/\\n\\n/", $fullContent, 2);

              if (array_count_values($split) > 1) {
                $title = preg_replace("/# (.+)/", "$1", $split[0]);
                $text = $split[1];

                $pages[] = [
                  'slug'     => Str::slug($title),
                  'template' => 'doc',
                  'content'  => [
                    'title'  => $title,
                    'text'  => $text,
                    'dirnode' => $result,
                    'node' => $pageRequest->json()
                  ]
                ];
              }
            }

            break;
          }

        case 'dir': {
            $dirRequest = Remote::request($result['url'], [
              'method' => 'GET',
              'agent' => 'elyukai',
              'headers' => [
                'accept' => 'application/vnd.github.v3+json'
              ]
            ]);

            if ($dirRequest->code() === 200) {
              $pages[] = [
                'slug'     => Str::slug($result['name']),
                'template' => 'docdir',
                'content'  => [
                  'title'  => $result['name'],
                  'dirnode' => $result,
                  'node' => $dirRequest->json()
                ]
              ];
            }

            break;
          }

        default:
          break;
      }
    }

    return Pages::factory($pages, $this);
  }
}
