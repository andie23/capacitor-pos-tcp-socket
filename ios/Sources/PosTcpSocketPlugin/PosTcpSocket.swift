import Foundation

@objc public class PosTcpSocket: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
