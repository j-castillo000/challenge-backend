CREATE SCHEMA blog;

CREATE TABLE blog.category (
    category_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) NOT NULL
) engine = InnoDB;

CREATE TABLE blog.tag (
    tag_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(200)
) engine = InnoDB;

CREATE TABLE blog.`user` (
    user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(150),
    created_at DATETIME DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    updated_at DATETIME,
    deleted_at DATETIME
) engine = InnoDB;

CREATE TABLE blog.post (
    post_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(250),
    content VARCHAR(4000),
    created_at DATETIME DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    updated_at DATE,
    deleted_at DATETIME,
    category_id INT,
    tag_id INT
) engine = InnoDB;

CREATE TABLE blog.post_category (
    post_category_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    category_id INT NOT NULL
) engine = InnoDB;

CREATE TABLE blog.post_tag (
    post_tag_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    post_id INT NOT NULL,
    tag_id INT NOT NULL
) engine = InnoDB;

CREATE TABLE blog.comment (
    comment_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    post_id INT NOT NULL,
    content VARCHAR(4000),
    created_at DATETIME DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
    updated_at DATETIME,
    deleted_at DATETIME
) engine = InnoDB;

ALTER TABLE
    blog.comment
ADD
    CONSTRAINT fk_comment_post FOREIGN KEY (post_id) REFERENCES blog.post(post_id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE
    blog.comment
ADD
    CONSTRAINT fk_comment_user FOREIGN KEY (user_id) REFERENCES blog.`user`(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE
    blog.post
ADD
    CONSTRAINT fk_post_user FOREIGN KEY (user_id) REFERENCES blog.`user`(user_id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE
    blog.post
ADD
    CONSTRAINT fk_post_category FOREIGN KEY (category_id) REFERENCES blog.category(category_id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE
    blog.post
ADD
    CONSTRAINT fk_post_tag FOREIGN KEY (tag_id) REFERENCES blog.tag(tag_id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE
    blog.post_category
ADD
    CONSTRAINT fk_post_category_post_2 FOREIGN KEY (post_id) REFERENCES blog.post(post_id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE
    blog.post_category
ADD
    CONSTRAINT fk_post_category_category FOREIGN KEY (category_id) REFERENCES blog.category(category_id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE
    blog.post_tag
ADD
    CONSTRAINT fk_post_tag_post FOREIGN KEY (post_id) REFERENCES blog.post(post_id) ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE
    blog.post_tag
ADD
    CONSTRAINT fk_post_tag_tag FOREIGN KEY (tag_id) REFERENCES blog.tag(tag_id) ON DELETE NO ACTION ON UPDATE NO ACTION;

INSERT INTO
    blog.category(category_id, name)
VALUES
    (1, 'Technology');

INSERT INTO
    blog.category(category_id, name)
VALUES
    (2, 'Food');

INSERT INTO
    blog.category(category_id, name)
VALUES
    (3, 'Lifestyle');

INSERT INTO
    blog.category(category_id, name)
VALUES
    (4, 'Others');

INSERT INTO
    blog.tag(tag_id, name)
VALUES
    (1, 'Adventure');

INSERT INTO
    blog.tag(tag_id, name)
VALUES
    (2, 'Web Development');

INSERT INTO
    blog.tag(tag_id, name)
VALUES
    (3, 'Node.js');

INSERT INTO
    blog.`user`(
        user_id,
        username,
        password,
        created_at,
        updated_at,
        deleted_at
    )
VALUES
    (
        3,
        'pruebasapps',
        '$2a$10$iPaJqXGZ9.BtNTmbYaxfCeD7aSFxq8bUZQlX3RdYtB47joJABrFNq',
        '2024-05-01 06.01.38 a. m.',
        null,
        null
    );