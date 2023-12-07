//
//  ContentView.swift
//  CLH
//
//  Created by Brandon S Lockey on 08/10/2023.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Image(systemName: "globe")
                    .imageScale(.large)
                    .foregroundColor(.accentColor)
                Text("Hello, world!")
            }
            .padding()
            .navigationBarTitle("Home", displayMode: .inline)
            .navigationBarItems(trailing:
                NavigationLink(destination: ProfileView()) {
                    Image(systemName: "person.circle.fill")
                        .imageScale(.large)
                        .accessibilityLabel("Profile")
                }
            )
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}



struct ProfileView: View {
    var body: some View {
        VStack(alignment: .leading) {
            Image("profile_picture")
                .resizable()
                .frame(width: 100, height: 100)
                .clipShape(Circle())
                .padding()
            Text("Username")
                .font(.title)
                .padding(.leading)
            Text("User Bio...")
                .font(.body)
                .padding(.leading)
            Text("Supplements")
                .font(.headline)
                .padding(.leading)
            List {
                Text("Vitamin D")
                Text("Omega-3")
                // ...
            }
        }
        .navigationTitle("Profile")
    }
}

struct ProfileView_Previews: PreviewProvider {
    static var previews: some View {
        ProfileView()
    }
}







func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    // Initialize Firebase or other setup code...
    
    // Print Bundle Identifier
    if let bundleID = Bundle.main.bundleIdentifier {
        print("Bundle Identifier: \(bundleID)")
    } else {
        print("Could not retrieve Bundle Identifier")
    }
    
    return true
}




