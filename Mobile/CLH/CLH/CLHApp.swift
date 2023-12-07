//
//  CLHApp.swift
//  CLH
//
//  Created by Brandon S Lockey on 08/10/2023.
//

import SwiftUI

@main
struct CLHApp: App {
    init() {
        print("App Initialized")
        // Print Bundle Identifier
        if let bundleID = Bundle.main.bundleIdentifier {
            print("Bundle Identifier: \(bundleID)")
        } else {
            print("Could not retrieve Bundle Identifier")
        }
    }
    
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
