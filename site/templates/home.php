<?php snippet('header') ?>

<?php snippet('intro') ?>

<div class="text">
  <div class="promo">
    <?= $page->text()->kt() ?>
  </div>
  <p>
    <a href="<?= $site->page('download')->url() ?>" class="btn"><?= $page->downloadtext()->html() ?></a>
  </p>
  <h2><?= t('community') ?></h2>
  <ul>
    <?php foreach ($page->communitylinks()->toStructure() as $communitylink) : ?>
      <li><a href="<?= $communitylink->link()->html() ?>"><?= $communitylink->name()->html() ?></a></li>
    <?php endforeach ?>
  </ul>
</div>

<?php snippet('footer') ?>
