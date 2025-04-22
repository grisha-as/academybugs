import { faker } from '@faker-js/faker';

export class CommentBuilder {
	addComment (symbol = 20) {
		this.comment = faker.string.alpha(symbol);
		return this;
	}
	addUsername() {
		this.username = faker.person.firstName();
		return this;
	}
    addEmail() {
		this.email = faker.internet.email();
		return this;
	}
	generate() {
		return {
			comment: this.comment,
            email: this.email,
			username: this.username,
		};
	}
}