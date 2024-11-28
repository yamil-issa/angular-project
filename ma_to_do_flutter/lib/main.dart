import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';
import 'package:ma_to_do_flutter/screens/todo_list_page.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  if (kIsWeb) {
    await Firebase.initializeApp(
      options: const FirebaseOptions(
        apiKey: "AIzaSyAqeXTJAm3695mGuEEFptdt_Wzm8sJcbTs",
        authDomain: "to-do-list-69dd3.firebaseapp.com",
        projectId: "to-do-list-69dd3",
        storageBucket: "to-do-list-69dd3.firebasestorage.app",
        messagingSenderId: "143385287986",
        appId: "1:143385287986:web:914076d4a3476b2e7d4b2b",
        measurementId: "G-C3VJ2LJGPR",
      ),
    );
  } else {
    await Firebase.initializeApp();
  }
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ToDo List',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color.fromARGB(255, 35, 23, 209)),
        useMaterial3: true,
      ),
      home: const TodoListPage(),
    );
  }
}
