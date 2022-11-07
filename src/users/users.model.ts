import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttrs {
	email: string;
	password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
	@ApiProperty({ example: '1', description: 'unique' })
	@Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
	id: number;

	@ApiProperty({ example: 'user@user.com', description: 'Email' })
	@Column({ type: DataType.STRING, unique: true, allowNull: false })
	email: string;

	@ApiProperty({ example: 'Qwerty123', description: 'Password' })
	@Column({ type: DataType.STRING, allowNull: false })
	password: string;

	@ApiProperty({ example: 'true', description: 'Ban or not' })
	@Column({ type: DataType.BOOLEAN, defaultValue: false })
	banned: boolean;

	@ApiProperty({ example: 'Bad guy', description: 'Ban reason' })
	@Column({ type: DataType.STRING, allowNull: true })
	banReason: string;
}