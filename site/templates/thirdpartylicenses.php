<?php snippet('header') ?>

<article>
  <?php snippet('intro') ?>
  <div class="text">
    <?php foreach ($page->licenses()->toStructure() as $license) : ?>
      <h2><?= $license->name()->html() ?></h2>
      <p class="license"><?= $license->text()->html() ?></p>
    <?php endforeach ?>
  </div>
</article>

<?php snippet('footer') ?>
