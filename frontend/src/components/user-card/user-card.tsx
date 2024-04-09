import { IUserData } from "../../interfaces";
import { getDateAndTime } from "../../utils";
import Icon from "../icon";
import { StyledUserCard } from "./user-card.styles";

interface IUserCard extends Omit<IUserData["user"], "id" | "profile_id"> {
  onEdit: () => void;
  onDelete: () => void;
};

const profilesNames = {
  admin: 'Administrador',
  default: 'Padrão',
};

export const UserCard = ({
  name,
  email,
  profile,
  created_at,
  updated_at,
  onEdit,
  onDelete,
}: IUserCard) => {
  const [createDate, createTime] = getDateAndTime(created_at);
  const [editDate, editTime] = getDateAndTime(updated_at);

  return (
    <StyledUserCard isadmin={profile === 'admin'}>
      <div className="user-card-top">
        <div className="user-info">
          <p className="info-name">{name}</p>
          <p className="info-email">{email}</p>
          <p className="info-profile">{profilesNames[profile]}</p>
        </div>
        <div className="info-date">
          Criado em: {createDate} às {createTime}
        </div>
      </div>
      <div className="user-card-bottom">
        <div className="user-card-actions">
          <Icon name="pencil" onClick={onEdit} background />
          <Icon name="trash" onClick={onDelete} background />
        </div>
        <div className="info-date">
          Última atualização: {editDate} às {editTime}
        </div>
      </div>
    </StyledUserCard>
  );
}