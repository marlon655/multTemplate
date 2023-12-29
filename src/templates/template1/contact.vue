<template>
    <section class="contact">
        <div class="form-container">
            <form>
                <div class="fields">
                    <span>Nome:</span>
                    <input type="text" name="nome" maxlength="50" required>
                </div>
                <div class="fields">
                    <span>Email:</span>
                    <input type="email" name="email" maxlength="50" required>
                </div>
                <div class="fields">
                    <span>Assunto:</span>
                    <input type="text" name="assunto" maxlength="50" required>
                </div>
                <div class="fields">
                    <textarea name="texto" maxlength="600" required></textarea>
                </div>
                <button type="submit" class="send-btn" id="send">Enviar</button>
            </form>
        </div>
    </section>
</template>
<script>

</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,body{
    background-color: aqua;
}
.contact{
    width: 100%;
    margin-top: 20px;
}
.form-container {
    padding: 10px;
    margin: 0 auto;
    max-width: 500px;
    height: 600px;
    width: 100%;
    border: 2px solid #00A470;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

.fields{
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.fields span{
    font-size: 18px;
    font-weight: 600;
    text-align: left;
    width: 100px;
    color: #00A470;
}
.fields input[type=text],
.fields input[type=email]{
    outline: none;
    border: 1px solid #00a470;
    background: #daffd8;
    font-size: 18px;
    padding-left: 5px;
    width: 100%;
    height: 30px;
    color: #00442F;
}
.fields textarea{
    outline: none;
    resize: none;
    width: 100%;
    height: 300px;
    padding: 10px;
    font-family: sans-serif;
    font-size: 18px;
    color: #00442F;
    border: 1px solid #00A470;
    background-color: #daffd8;
}
.send-btn{
    margin-top: 10px;
    font-size: 26px;
    padding: 5px;
    color: white;
    background-color: #00A470;
    border: 2px solid #00442F;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
}
</style>