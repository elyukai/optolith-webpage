<?php snippet('header') ?>

<article>
  <?php snippet('intro') ?>

  <section class="text">
    <?= $page->intro()->kt() ?>

    <address>
      <strong><?= $page->name()->smartypants() ?></strong><br>
      <?= $page->street()->smartypants() ?> <?= $page->number()->smartypants() ?><br>
      <?= $page->zipcode()->smartypants() ?> <?= $page->city()->smartypants() ?><br>
      <?= $page->country()->smartypants() ?>
    </address>

    <dl>
      <dt><?= t('email') ?></dt>
      <dd><a href="mailto:<?= $page->email()->html() ?>"><?= $page->email()->smartypants() ?></a></dd>
      <dt><?= t('phone') ?></dt>
      <dd>
        <a href="tel:<?= $page->tel()->html() ?>">
          <?php
          $number = $page->tel()->smartypants();
          $strippedPrefix = preg_replace('/\+\d{2}/', '0', $number);
          $addedSpaces = preg_replace('/(\d{5})/', '$1 ', $strippedPrefix, 1);
          echo $addedSpaces ?>
        </a>
      </dd>
    </dl>
  </section>
</article>

<?php snippet('footer') ?>
