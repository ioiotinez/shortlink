export class Link {
	constructor(id, url, description, createdAt) {
		this.id = id;
		this.url = url;
		this.description = description;
		this.createdAt = createdAt;
	}

	getId() {
		return this.id;
	}

	getUrl() {
		return this.url;
	}

	getDescription() {
		return this.description;
	}

	getCreatedAt() {
		return this.createdAt;
	}

	setId(id) {
		this.id = id;
	}

	setUrl(url) {
		this.url = url;
	}

	setDescription(description) {
		this.description = description;
	}

	setCreatedAt(createdAt) {
		this.createdAt = createdAt;
	}
}
