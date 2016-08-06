jQuery(document).ready(function($){
    var mediaUploader;
    //Galeria
    $('#upload-galeria-header').on('click',function(e){
        e.preventDefault();
        if(mediaUploader){
            mediaUploader.open();
            return;
        }
        mediaUploader = wp.media.frames.file_frame = wp.media({
           title: 'Escolha uma imagem destacada',
           buttom: {
               text: 'Escolha uma imagem',
               multiple: false
           }
        });
        mediaUploader.on('select',function(){
            attachment = mediaUploader.state().get('selection').first().toJSON();
            $('#galeria_header_url').val(attachment.url);
            $(".galeria-header-not-selected").addClass("hidden");  //Esconder os itens de quando está selecionado
            $(".galeria-header-selected").removeClass("hidden"); //Mostrar os itens de quando está selecionado
            $("#header-galeria-image").css("background-image",'url('+attachment.url+')');
            $("#upload-galeria-header").attr("value",'Trocar a imagem');
        });
        mediaUploader.open();
    });
    $("#upload-galeria-remove").on('click',function(e){
        e.preventDefault();
        $('#galeria_header_url').val('');
        $(".galeria-header-not-selected").removeClass("hidden"); //Esconder os itens de quando não está selecionado
        $(".galeria-header-selected").addClass("hidden"); //Mostrar os itens de quando está selecionado
        $("#upload-galeria-header").attr("value","Selecionar imagem");
    });   
    //Local
    $('#upload-local-header').on('click',function(e){
        e.preventDefault();
        if(mediaUploader){
            mediaUploader.open();
            return;
        }
        mediaUploader = wp.media.frames.file_frame = wp.media({
           title: 'Escolha uma imagem destacada',
           buttom: {
               text: 'Escolha uma imagem',
               multiple: false
           }
        });
        mediaUploader.on('select',function(){
            attachment = mediaUploader.state().get('selection').first().toJSON();
            $('#local_header_url').val(attachment.url);
            $(".local-header-not-selected").addClass("hidden");  //Esconder os itens de quando está selecionado
            $(".local-header-selected").removeClass("hidden"); //Mostrar os itens de quando está selecionado
            $("#header-local-image").css("background-image",'url('+attachment.url+')');
            $("#upload-local-header").attr("value",'Trocar a imagem');
        });
        mediaUploader.open();
    });
    $("#upload-local-remove").on('click',function(e){
        e.preventDefault();
        $('#local_header_url').val('');
        $(".local-header-not-selected").removeClass("hidden"); //Esconder os itens de quando não está selecionado
        $(".local-header-selected").addClass("hidden"); //Mostrar os itens de quando está selecionado
        $("#upload-local-header").attr("value","Selecionar imagem");
    });
    //Evento
    $('#upload-evento-header').on('click',function(e){
        e.preventDefault();
        if(mediaUploader){
            mediaUploader.open();
            return;
        }
        mediaUploader = wp.media.frames.file_frame = wp.media({
           title: 'Escolha uma imagem destacada',
           buttom: {
               text: 'Escolha uma imagem',
               multiple: false
           }
        });
        mediaUploader.on('select',function(){
            attachment = mediaUploader.state().get('selection').first().toJSON();
            $('#evento_header_url').val(attachment.url);
            $(".evento-header-not-selected").addClass("hidden");  //Esconder os itens de quando está selecionado
            $(".evento-header-selected").removeClass("hidden"); //Mostrar os itens de quando está selecionado
            $("#header-evento-image").css("background-image",'url('+attachment.url+')');
            $("#upload-evento-header").attr("value",'Trocar a imagem');
        });
        mediaUploader.open();
    });
    $("#upload-evento-remove").on('click',function(e){
        e.preventDefault();
        $('#evento_header_url').val('');
        $(".evento-header-not-selected").removeClass("hidden"); //Esconder os itens de quando não está selecionado
        $(".evento-header-selected").addClass("hidden"); //Mostrar os itens de quando está selecionado
        $("#upload-evento-header").attr("value","Selecionar imagem");
    });
    
    $('.polivoz_nota_musical_field').on('keyup',function(){
        var text_full = $(this).val();
        var postID = $(this).data('postid');
        var text_filtered = text_full.replace(/[^A-Za-z0]/g,'');
        text_filtered = text_filtered.replace(/[0]{2}/g,'0');
        $(this).parent().find('.nota-musical').text(calculate_nota_musical(postID,text_filtered));
        $(this).val(text_filtered);
    });
    
    //Música
    $('#upload-musica-header').on('click',function(e){
        e.preventDefault();
        if(mediaUploader){
            mediaUploader.open();
            return;
        }
        mediaUploader = wp.media.frames.file_frame = wp.media({
           title: 'Escolha uma imagem destacada',
           buttom: {
               text: 'Escolha uma imagem',
               multiple: false
           }
        });
        mediaUploader.on('select',function(){
            attachment = mediaUploader.state().get('selection').first().toJSON();
            $('#musica_header_url').val(attachment.url);
            $(".musica-header-not-selected").addClass("hidden");  //Esconder os itens de quando está selecionado
            $(".musica-header-selected").removeClass("hidden"); //Mostrar os itens de quando está selecionado
            $("#header-musica-image").css("background-image",'url('+attachment.url+')');
            $("#upload-musica-header").attr("value",'Trocar a imagem');
        });
        mediaUploader.open();
    });
    $("#upload-musica-remove").on('click',function(e){
        e.preventDefault();
        $('#musica_header_url').val('');
        $(".musica-header-not-selected").removeClass("hidden"); //Esconder os itens de quando não está selecionado
        $(".musica-header-selected").addClass("hidden"); //Mostrar os itens de quando está selecionado
        $("#upload-musica-header").attr("value","Selecionar imagem");
    });
    
    $('.polivoz_nota_musical_field').on('keyup',function(){
        var text_full = $(this).val();
        var postID = $(this).data('postid');
        var text_filtered = text_full.replace(/[^A-Za-z0]/g,'');
        text_filtered = text_filtered.replace(/[0]{2}/g,'0');
        $(this).parent().find('.nota-musical').text(calculate_nota_musical(postID,text_filtered));
        $(this).val(text_filtered);
    });
    
    function calculate_nota_musical(postID,text){
        var nota_val = ["b", "c", "K", "eQ", "f", "Y", "h", "i",
            "j",  "G", "l", "n", "C", "o", "p", "Z", "L", "s", "t", 
            "H", "v", "U", "y"];
        if (typeof(text)==='undefined'||text==""){
            return nota_val[((postID - 1) % 22)];
        }else if(text == "0"||text == "00"){
            return "";
        }else{
            return text;
        }
    }
    
});
