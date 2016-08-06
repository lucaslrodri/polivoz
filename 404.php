<?php
/**
 * The template for displaying 404 pages (not found)
 *
 */

get_header(); ?>

</header>
<h1></h1>
<main class='container' id="main" role="main">
    <section class="container">
            <header class='row'>
                <div class="section-title">
                    <h1>A página que você procura não foi encontrada</h1>
                </div>
            </header><!-- .page-header -->
            <h1></h1>
            <?php
            polivoz_error_404('Não há itens nessa página:',
            array('O conteúdo dessa página foi removido;',
                  'O conteúdo mudou de lugar; ',
                  'Você digitou o endereço errado.'
            ));?>
    </section><!-- .error-404 -->
</main><!-- .site-main -->

<?php get_footer(); ?>
