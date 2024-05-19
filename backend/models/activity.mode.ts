export default class Activity {
    constructor(
        public id: string,
        public status: string,
        public valueCrypto: number,
        public valueUSD: number,
        public logo: string,
        public symbol: string
    ) {}
}
