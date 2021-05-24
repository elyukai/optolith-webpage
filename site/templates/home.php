<?php snippet('header') ?>

<article>
  <?php snippet('intro', ['intro' => $page->firstText()]) ?>

  <section class="image"></section>

  <section class="text"><?= $page->secondText()->kt() ?></section>

  <?php if ($download = $site->page('download')) : ?>
    <section class="cta"><a href="<?= $download->url() ?>" class="btn btn--primary"><?= $download->title()->kti() ?></a></section>
  <?php endif ?>

  <section class="text">
    <h2><?= t('community') ?></h2>
    <ul class="community-links">
      <?php foreach ($page->communitylinks()->toStructure() as $communitylink) : ?>
        <li><a href="<?= $communitylink->link()->html() ?>"><?= $communitylink->name()->html() ?></a></li>
      <?php endforeach ?>
    </ul>
  </section>
</article>

<?php snippet('footer') ?>
