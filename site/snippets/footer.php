    </div>
  </main>

  <footer>
    <div id="footer-inner">
      <div class="links">
        <h2 class="hidden">Alle Seiten</h2>
        <ul>
          <?php foreach ($site->footerlinks()->toPages() as $child) : ?>
            <li><a href="<?= $child->url() ?>"><?= $child->title()->html() ?></a></li>
          <?php endforeach ?>
        </ul>
      </div>
      <div class="other-languages">
        <h2 class="hidden">Sprache ändern</h2>
        <ul>
          <?php foreach ($kirby->languages() as $language) : ?>
            <li><a href="<?= $page->urlForLanguage($language->code()) ?>" hreflang="<?= html($language->code()) ?>">
                <?= html($language->name()) ?>
              </a></li>
          <?php endforeach ?>
        </ul>
      </div>
      <p class="legal">
        <?= $site->legal()->html() ?>
      </p>
      <img src="<?= url('assets/images/footer-logo.svg') ?>" id="footer-logo" aria-role="presentation" />
      <!-- <object type="image/svg+xml" data="<?= url('assets/images/footer-logo.svg') ?>" id="footer-logo" aria-role="presentation" /> -->
    </div>
  </footer>

  <?= js(['assets/js/highlight.pack.js', 'assets/js/highlight.js', '@auto']) ?>

</body>

</html>
