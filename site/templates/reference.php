<?php snippet('header') ?>

<article>
  <?php snippet('intro', ['breadcrumbs' => true]) ?>
  <section class="text">
    <?= $page->text()->kt() ?>
  </section>
  <?php snippet('reference-children') ?>
</article>

<?php snippet('footer') ?>
