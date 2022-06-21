import {FC} from "react";
import {TopbarContainer} from "./topbar.styles";

interface ITopbar {}

const Topbar: FC<ITopbar> = () => (
    <TopbarContainer>
        <p>Topbar</p>
    </TopbarContainer>
);

export default Topbar;