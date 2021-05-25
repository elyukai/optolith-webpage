  </main>

  <footer>
    <div class="links">
      <h2 class="visually-hidden"><?= t('all pages') ?></h2>
      <ul>
        <?php
        $footerLinks = $site->footerlinks()->toPages();
        $odd = $footerLinks->isOdd();
        $count = $footerLinks->count();
        $pageWhereToBreakId = $count > 2 ? $footerLinks->nth($count / 2 + 1)->id() : '';
        foreach ($footerLinks as $child) : ?>
          <li<?= $odd && $child->id() === $pageWhereToBreakId ? ' class="odd-column"' : '' ?>><a href="<?= $child->url() ?>"><?= $child->title()->html() ?></a></li>
          <?php endforeach ?>
      </ul>
    </div>
    <div class="other-languages">
      <h2 class="visually-hidden"><?= t('change language') ?></h2>
      <ul>
        <?php foreach ($kirby->languages() as $language) : ?>
          <li><a href="<?= $page->urlForLanguage($language->code()) ?>" hreflang="<?= html($language->code()) ?>">
              <?= html($language->name()) ?>
            </a></li>
        <?php endforeach ?>
      </ul>
    </div>
    <p class="legal">
      &copy; 2017&ndash;<?= date("Y") ?> <?= $site->legal()->html() ?>
    </p>
  </footer>

  <?= js(['assets/js/highlight.pack.js', 'assets/js/highlight.js', '@auto']) ?>

</body>

</html>
