import React from "react"
//@ts-ignore
import { ConnectButton } from "@web3uikit/web3"
import Link from "next/link"

const Header = () => {
    return (
        <nav>
            <Link href="/">
            <p>NFT Marketplace</p>
            </Link>
            <Link href="/sell-nft">
            <p>Sell NFT</p>
            </Link>
            <ConnectButton />
        </nav>
    )
}

Header.propTypes = {}

export default Header
