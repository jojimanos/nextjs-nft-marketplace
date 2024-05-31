import React from "react"
//@ts-ignore
import { ConnectButton } from "@web3uikit/web3"
import Link from "next/link"

const Header = () => {
    return (
        <nav className="p-5 borber-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
            <div className="flex flex-row items center">
                <Link href="/">
                    <span className="mr-4 p-6">NFT Marketplace</span>
                </Link>
                <Link href="/sell-nft">
                    <span className="mr-4 p-6">Sell NFT</span>
                </Link>
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}

Header.propTypes = {}

export default Header
