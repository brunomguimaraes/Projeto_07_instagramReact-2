const userData = {
    img: "assets/img/catanacomics.svg",
    name: "catanacomics",
    nickName: "Catana"
};

const UserInfo = (props) => {
    return (
        <div class="usuario">
            <img src={props.img} alt="" />

            <div class="texto">
                <strong>{props.name}</strong>
                {props.nickName}
            </div>
        </div>
    );
}

export default function User() {
    return (
        <UserInfo name={userData.name} img={userData.img} nickName={userData.nickName} />
    );
}

