<?php snippet('header') ?>

<article>
  <?php snippet('intro') ?>
  <div class="text">
    <?= $page->text()->kt() ?>
    <p><a class="btn" href="<?= $page->downloadlink()->html() ?>"><?= $page->downloadtext()->html() ?></a></p>
  </div>
</article>

<?php snippet('footer') ?>
