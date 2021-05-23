<?php snippet('header') ?>

<article>
  <?php snippet('intro', ['breadcrumbs' => true]) ?>
  <section class="text">
    <?= $page->text()->kt() ?>
  </section>
</article>

<?php snippet('footer') ?>
