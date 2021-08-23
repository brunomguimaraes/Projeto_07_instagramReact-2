const posts = [
    {
        name: "meowed",
        img: "assets/img/meowed.svg",
        content: "assets/img/gato-telefone.svg",
        likeImg: "assets/img/respondeai.svg",
        likeName: "respondeai",
    },
    {
        name: "barked",
        img: "assets/img/barked.svg",
        content: "assets/img/dog.svg",
        likeImg: "assets/img/adorable_animals.svg",
        likeName: "adorable_animals",

    },
];

const Post = (props) => {
    return (
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.img} alt="" />
                    {props.name}
                </div>

                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.content} alt="" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>

                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likeImg} alt="" />

                    <div className="texto">
                        Curtido por <strong>{props.likeName}</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>         
    );
};

export default function Posts() {
    return (
        <div className="posts">
            {posts.map((post, index) => 
            <Post name={post.name} img={post.img} content={post.content} likeImg={post.likeImg} likeName={post.likeName} key={index} />
            )}
        </div>
    );
}

