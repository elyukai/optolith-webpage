<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $page->title() ?> | <?= $site->title() ?></title>

  <?= css([
    'assets/css/index.css',
    'assets/css/highlight.css',
    '@auto'
  ]) ?>

  <link rel="shortcut icon" type="image/x-icon" href="<?= url('favicon.ico') ?>">
</head>

<body>

  <header>
    <div id="header-inner">
      <a class="logo" href="<?= $site->url() ?>">
        <img src="<?= url('assets/images/logo.svg') ?>" id="header-logo" alt="<?= $site->title()->html() ?>" />
        <!-- <object type="image/svg+xml" data="<?= url('assets/images/logo.svg') ?>" id="header-logo"><?= $site->title()->html() ?></object> -->
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
    <div id="main-inner">
