<template>
    <section class="bag">
        <div class="left">
            <div class="card-01">
                
                <div class="box-item-padding">
                    <div class="box-item">
                        <div class="box-img">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="card-01">
                <h2>Finalizar Compra</h2>
            </div>
        </div>
    </section>

</template>
<script>

</script>
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.bag{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.left{
    width: 65%;
    margin-right: 10px;
}
.right{
    width: 100%;
    max-width: 400px;
}
.card-01{
    width: 100%;
    border: 1px solid #ccc;
    box-shadow: 5px 5px 5px 0px rgba(204,204,204,1);
}
.box-item-padding{
    width: 100%;
    padding: 10px;
}
.box-item{
    width: 100%;
    border: 1px solid #ccc;
}
.box-img{
    background-color: blue;
    height: 150px;
    width: 150px;
}
@media screen and (max-width: 768px){
.bag{
    display: block;
}
.left{
    width: 100%;
}
.right{
    margin-top: 20px;
    max-width: 100%;
}
}
</style>