<!DOCTYPE html>
<html lang="<?= $kirby->language()->code() ?>">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $page->title() ?> | <?= $site->title() ?></title>

  <?= css([
    'assets/css/index.css',
    '@auto'
  ]) ?>

  <link rel="shortcut icon" type="image/x-icon" href="<?= url('favicon.ico') ?>">
</head>

<body>

  <header>
    <div>
      <a class="logo" href="<?= $site->url() ?>">
        <?php snippet('icons/logo', ['label' => $site->title()->html()]) ?>
      </a>

      <nav class="menu">
        <ul>
          <?php foreach ($site->headerlinks()->toPages() as $item) : ?>
            <li><a <?php e($item->isOpen(), 'aria-current ') ?> href="<?= $item->url() ?>"><?= $item->title()->html() ?></a></li>
          <?php endforeach ?>
        </ul>
      </nav>
    </div>
  </header>

  <main>
