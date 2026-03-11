import List "mo:core/List";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type AppId = Nat;

  type App = {
    id : AppId;
    name : Text;
    description : Text;
    category : Category;
    price : ?Float;
    rating : Float;
    downloadCount : Nat;
    iconUrl : Text;
  };

  type Category = {
    #games;
    #productivity;
    #entertainment;
    #tools;
    #education;
  };

  module App {
    public func compare(a1 : App, a2 : App) : Order.Order {
      if (a1.id < a2.id) { #less } else if (a1.id > a2.id) {
        #greater;
      } else {
        #equal;
      };
    };
  };

  let apps = Map.empty<Nat, App>();

  public shared ({ caller }) func addApp(
    name : Text,
    description : Text,
    category : Category,
    price : ?Float,
    rating : Float,
    downloadCount : Nat,
    iconUrl : Text,
  ) : async AppId {
    let returnId = apps.size();

    let app : App = {
      id = returnId;
      name;
      description;
      category;
      price;
      rating;
      downloadCount;
      iconUrl;
    };

    apps.add(returnId, app);
    returnId;
  };

  public query ({ caller }) func getAllApps() : async [App] {
    apps.values().toArray().sort();
  };

  public query ({ caller }) func getAppsByCategory(category : Category) : async [App] {
    let filteredApps = apps.values().toArray().filter(
      func(app) { app.category == category }
    );
    filteredApps.sort();
  };

  public query ({ caller }) func getAppById(id : AppId) : async App {
    switch (apps.get(id)) {
      case (null) { Runtime.trap("App not found") };
      case (?app) { app };
    };
  };

  public shared ({ caller }) func seedSampleApps() : async () {
    let sampleApps = List.fromArray<App>([
      {
        id = 0;
        name = "Super Game";
        description = "An exciting puzzle game.";
        category = #games;
        price = null;
        rating = 4.5;
        downloadCount = 100000;
        iconUrl = "https://example.com/supergame.png";
      },
      {
        id = 1;
        name = "Productivity Pro";
        description = "Boost your productivity with smart tools.";
        category = #productivity;
        price = ?2.99;
        rating = 4.8;
        downloadCount = 50000;
        iconUrl = "https://example.com/productivitypro.png";
      },
      {
        id = 2;
        name = "Movie Streamer";
        description = "Stream your favorite movies on the go.";
        category = #entertainment;
        price = null;
        rating = 4.7;
        downloadCount = 75000;
        iconUrl = "https://example.com/moviestreamer.png";
      },
      {
        id = 3;
        name = "Toolbox";
        description = "All-in-one toolset for your device.";
        category = #tools;
        price = ?1.99;
        rating = 4.3;
        downloadCount = 30000;
        iconUrl = "https://example.com/toolbox.png";
      },
      {
        id = 4;
        name = "Study Buddy";
        description = "Your companion for effective studying.";
        category = #education;
        price = null;
        rating = 4.6;
        downloadCount = 60000;
        iconUrl = "https://example.com/studybuddy.png";
      },
    ]);

    for (app in sampleApps.values()) {
      ignore addApp(
        app.name,
        app.description,
        app.category,
        app.price,
        app.rating,
        app.downloadCount,
        app.iconUrl,
      );
    };
  };
};
