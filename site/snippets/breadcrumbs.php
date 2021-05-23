<nav class="breadcrumbs" aria-label="breadcrumb">
  <ol>
    <?php foreach ($page->breadcrumbs() as $crumb) : ?>
      <li>
        <?php if ($crumb->isActive()) : ?>
          <span aria-current="page">
            <?= html($crumb->title()) ?>
          </span>
        <?php else : ?>
          <a href="<?= $crumb->url() ?>">
            <?= html($crumb->title()) ?>
          </a>
        <?php endif ?>
      </li>
    <?php endforeach ?>
  </ol>
</nav>
