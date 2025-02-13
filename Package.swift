// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorPosTcpSocket",
    platforms: [.iOS(.v14)],
    products: [
        .library(
            name: "CapacitorPosTcpSocket",
            targets: ["PosTcpSocketPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "7.0.0")
    ],
    targets: [
        .target(
            name: "PosTcpSocketPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/PosTcpSocketPlugin"),
        .testTarget(
            name: "PosTcpSocketPluginTests",
            dependencies: ["PosTcpSocketPlugin"],
            path: "ios/Tests/PosTcpSocketPluginTests")
    ]
)