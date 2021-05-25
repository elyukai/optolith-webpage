<?php snippet('header') ?>

<article>
  <?php snippet('intro', ['intro' => $page->firstText()]) ?>

  <?php if ($image = $page->content()->image()->toFile()) : ?>
    <section class="image">
      <img src="<?= $image->url() ?>" alt="<?= $image->alt()->html() ?>">
    </section>
  <?php endif ?>

  <section class="text"><?= $page->secondText()->kt() ?></section>

  <?php if ($download = $site->page('download')) : ?>
    <section class="cta"><a href="<?= $download->url() ?>" class="btn btn--primary"><?= $download->title()->kti() ?></a></section>
  <?php endif ?>

  <section class="text">
    <h2><?= $page->communityHeadline()->kti() ?></h2>
    <ul class="community-links">
      <?php foreach ($page->communitylinks()->toStructure() as $communitylink) : ?>
        <li><a class="btn" href="<?= $communitylink->link()->html() ?>"><?= $communitylink->name()->html() ?></a></li>
      <?php endforeach ?>
    </ul>
  </section>
</article>

<?php snippet('footer') ?>
