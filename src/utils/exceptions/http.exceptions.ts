class HttpException extends Error {
    public status: number;
    public messsage: string;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.messsage = message;
    }
}

export default HttpException;