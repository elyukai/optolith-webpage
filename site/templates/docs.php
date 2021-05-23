<?php snippet('header') ?>

<article>
  <?php snippet('intro') ?>
  <div class="text">
    <?= $page->text()->kt() ?>
  </div>
  <?php
  $children = $page->children();

  if (is_string($children)) : ?>
    <pre><code><?= $children ?></code></pre>
  <?php else : ?>
    <ul>
      <?php foreach ($children as $docpage) : ?>
        <li>
          <a href="<?= $docpage->url() ?>"><?= $docpage->title()->kti() ?></a>
        </li>
      <?php endforeach ?>
    </ul>
  <?php endif ?>
</article>

<?php snippet('footer') ?>
