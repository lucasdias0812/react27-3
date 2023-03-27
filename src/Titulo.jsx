function Title(){

    let nome = "Tutu Bixa"
    const urlImg = "https://conexaopanvel.faccat.br/wp-content/uploads/2020/05/react-js-800x450.png"
   
    return (
    <div>
    <h1>Aqui é um {nome} e este é um titulo</h1>
    <img width = {100} src={urlImg}/>
    <p>Tutu Bixa</p>
    </div>
    );
}
export default Title;   