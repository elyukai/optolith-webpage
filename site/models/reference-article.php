<?php

use Kirby\Cms\Page;

class ReferenceArticlePage extends Page
{
  /**
   * Builds a breadcrumb collection
   *
   * @return \Kirby\Cms\Pages
   */
  public function breadcrumbs()
  {
    // get all parents and flip the order
    $crumb = $this->parents()->flip();

    // add the active page
    $crumb->append($this->id(), $this);

    return $crumb;
  }
}
