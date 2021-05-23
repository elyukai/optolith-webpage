<?php snippet('header') ?>

<article>
  <?php snippet('intro', ['breadcrumbs' => true]) ?>
  <section class="text">
    <?= $page->text()->kt() ?>
  </section>
  <?php if (!$page->hideChildren()->toBool()) : ?>
    <?php snippet('reference-children') ?>
  <?php endif ?>
</article>

<?php snippet('footer') ?>
