<header>
  <?php isset($breadcrumbs) && $breadcrumbs === true ? snippet('breadcrumbs') : null ?>
  <h1><?= $page->headline()->or($page->title())->html() ?></h1>
</header>
<?php
$intro ??= $page->intro();

if ($intro->isNotEmpty()) : ?>
  <section class="intro">
    <p><?= $intro->kti() ?></p>
  </section>
<?php endif ?>
