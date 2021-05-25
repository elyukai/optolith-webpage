<?php snippet('header') ?>

<article>
  <?php snippet('intro') ?>

  <section class="text">
    <?php foreach ($page->licenses()->toStructure() as $license) : ?>
      <h2><?= $license->name()->html() ?></h2>
      <pre class="wrap nohighlight"><code><?= $license->text()->html() ?></code></pre>
    <?php endforeach ?>
  </section>
</article>

<?php snippet('footer') ?>
