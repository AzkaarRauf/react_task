export default class Activity {
    constructor(
        public id: number,
        public userId: number,
        public status: string,
        public valueCrypto: number,
        public valueUSD: number,
        public logo: string,
        public symbol: string
    ) {}
}
