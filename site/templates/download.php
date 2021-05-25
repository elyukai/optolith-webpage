<?php snippet('header') ?>

<article>
  <?php snippet('intro') ?>

  <section class="text"><?= $page->text()->kt() ?></section>

  <section class="cta"><a href="<?= $page->downloadlink()->html() ?>" class="btn btn--primary"><?= $page->downloadtext()->html() ?></a></section>
</article>

<?php snippet('footer') ?>
