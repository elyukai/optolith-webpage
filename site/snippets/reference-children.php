<section class="reference-children">
  <nav>
    <h2 class="hidden">Subpages</h2>
    <ul>
      <?php foreach ($page->children() as $docpage) : ?>
        <li>
          <a href="<?= $docpage->url() ?>">
            <h3><?= $docpage->title()->kti() ?></h3>
            <?php if ($docpage->intro()->isNotEmpty()) : ?>
              <p><?= $docpage->intro()->kti() ?></p>
            <?php endif ?>
          </a>
        </li>
      <?php endforeach ?>
    </ul>
  </nav>
</section>
