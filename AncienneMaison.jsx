import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const translations = {
  en: {
    login: "Login",
    email: "Email",
    password: "Password",
    send: "Send",
    search: "Search...",
    messagePlaceholder: "Type your message...",
    welcome: "Welcome to Ancienne Maison",
    about: "About Us",
    contact: "Contact",
    features: "Our Features",
  },
  fr: {
    login: "Connexion",
    email: "E-mail",
    password: "Mot de passe",
    send: "Envoyer",
    search: "Rechercher...",
    messagePlaceholder: "Tapez votre message...",
    welcome: "Bienvenue à Ancienne Maison",
    about: "À propos",
    contact: "Contact",
    features: "Nos caractéristiques",
  },
  ar: {
    login: "تسجيل الدخول",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    send: "إرسال",
    search: "بحث...",
    messagePlaceholder: "اكتب رسالتك...",
    welcome: "مرحبًا بكم في Ancienne Maison",
    about: "من نحن",
    contact: "تواصل معنا",
    features: "مميزاتنا",
  },
};

export default function AncienneMaison() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (message.trim()) {
      setChat([...chat, { text: message, fromUser: true }]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')] bg-cover bg-center flex flex-col items-center justify-center p-4 relative">
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button onClick={() => setLang('en')}>EN</button>
        <button onClick={() => setLang('fr')}>FR</button>
        <button onClick={() => setLang('ar')}>AR</button>
      </div>

      <div className="text-white text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-center">
        {t.welcome}
      </div>

      <Tabs defaultValue="login" className="w-full max-w-md bg-white bg-opacity-90 rounded-2xl shadow-lg p-6">
        <TabsList className="grid grid-cols-1">
          <TabsTrigger value="login">{t.login}</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardContent className="space-y-4 pt-6">
              <Input placeholder={t.email} type="email" />
              <Input placeholder={t.password} type="password" />
              <Button className="w-full">{t.login}</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-10 w-full max-w-xl space-y-4">
        <Input placeholder={t.search} className="mb-4" />
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-4 space-y-2 max-h-64 overflow-y-auto">
          {chat.map((msg, i) => (
            <div key={i} className={msg.fromUser ? 'text-right' : 'text-left'}>
              <p className="bg-gray-100 inline-block rounded-xl px-4 py-2">{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t.messagePlaceholder}
            className="flex-grow"
          />
          <Button onClick={handleSend}>{t.send}</Button>
        </div>
      </div>

      <div className="mt-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
        <div className="bg-black bg-opacity-40 rounded-2xl p-4">
          <h3 className="text-xl font-bold">{t.about}</h3>
          <p>Ancienne Maison is your destination for luxury and heritage.</p>
        </div>
        <div className="bg-black bg-opacity-40 rounded-2xl p-4">
          <h3 className="text-xl font-bold">{t.features}</h3>
          <p>Elegant design, responsive support, and multilingual experience.</p>
        </div>
        <div className="bg-black bg-opacity-40 rounded-2xl p-4">
          <h3 className="text-xl font-bold">{t.contact}</h3>
          <p>Contact us any time via the chat or our contact page.</p>
        </div>
      </div>
    </div>
  );
}
