import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
	@ApiProperty({ example: 'user@user.com', description: 'Email' })
	readonly email: string;
	@ApiProperty({ example: 'Qwerty123', description: 'Password' })
	readonly password: string;
}