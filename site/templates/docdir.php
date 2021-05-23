<?php snippet('header') ?>

<article>
  <?php snippet('intro') ?>
  <div class="text">
    <pre><code><?= json_encode($page->dirnode(), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) ?></code></pre>
    <pre><code><?= json_encode($page->node(), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) ?></code></pre>
  </div>
</article>

<?php snippet('footer') ?>
