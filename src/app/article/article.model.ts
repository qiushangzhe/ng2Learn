export class Article {
    avantar: string; // 头像
    commentator: string; // 评论员
    time: string; // 评论时间
    comment: string; // 评论内容
    constructor(commentator: string, comment: string, avantar?: string) {
        this.avantar = avantar || '';
        this.commentator = commentator;
        this.time = new Date().toString();
        this.comment = comment;
    }
}