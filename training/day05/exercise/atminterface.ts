interface Atm {
    currentBalance: number
  , operation     : string
    , currency: string
  , amount : string
  , withdraw: function (): void {}
}