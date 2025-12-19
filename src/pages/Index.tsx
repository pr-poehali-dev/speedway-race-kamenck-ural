import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [liveStatus, setLiveStatus] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2024-12-20T10:00:00').getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setLiveStatus(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const racers = [
    { id: 1, name: 'Алексей Морозов', team: 'Ледяные Волки', number: 7, country: '🇷🇺', points: 245 },
    { id: 2, name: 'Дмитрий Соколов', team: 'Сибирские Тигры', number: 13, country: '🇷🇺', points: 238 },
    { id: 3, name: 'Иван Петров', team: 'Уральский Гром', number: 21, country: '🇷🇺', points: 220 },
    { id: 4, name: 'Сергей Новиков', team: 'Северная Сталь', number: 5, country: '🇷🇺', points: 215 },
    { id: 5, name: 'Максим Волков', team: 'Ледяные Волки', number: 18, country: '🇷🇺', points: 198 },
    { id: 6, name: 'Антон Кузнецов', team: 'Уральский Гром', number: 9, country: '🇷🇺', points: 187 },
  ];

  const schedule = [
    { date: '20 декабря', time: '10:00', round: 'Квалификация', status: 'upcoming' },
    { date: '20 декабря', time: '14:00', round: '1/4 финала', status: 'upcoming' },
    { date: '20 декабря', time: '18:00', round: '1/2 финала', status: 'upcoming' },
    { date: '21 декабря', time: '12:00', round: 'Малый финал', status: 'upcoming' },
    { date: '21 декабря', time: '15:00', round: 'Финал', status: 'upcoming' },
  ];

  const results = [
    { position: 1, racer: 'Алексей Морозов', time: '1:23.45', points: 25, trend: 'up' },
    { position: 2, racer: 'Дмитрий Соколов', time: '1:23.78', points: 20, trend: 'same' },
    { position: 3, racer: 'Иван Петров', time: '1:24.12', points: 16, trend: 'down' },
    { position: 4, racer: 'Сергей Новиков', time: '1:24.56', points: 13, trend: 'up' },
    { position: 5, racer: 'Максим Волков', time: '1:25.03', points: 11, trend: 'same' },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Zap" size={32} className="text-primary" />
              <h1 className="text-2xl font-heading font-bold">ICE SPEEDWAY 2024</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#schedule" className="hover:text-primary transition-colors">Расписание</a>
              <a href="#racers" className="hover:text-primary transition-colors">Гонщики</a>
              <a href="#results" className="hover:text-primary transition-colors">Результаты</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
              <a href="#tickets" className="hover:text-primary transition-colors">Билеты</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Ticket" size={18} className="mr-2" />
              Купить билет
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/6df9a87a-959a-4aba-a7cc-5384f4a6a275/files/65acc69e-b7ea-412f-b888-11d511146e3d.jpg)' }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center animate-slide-up">
            {liveStatus && (
              <Badge className="mb-6 animate-pulse-glow bg-secondary text-secondary-foreground text-lg px-6 py-2">
                <Icon name="Radio" size={20} className="mr-2 animate-pulse" />
                Прямая трансляция
              </Badge>
            )}
            
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ICE SPEEDWAY
            </h1>
            <p className="text-2xl md:text-3xl font-heading mb-4 text-muted-foreground">
              Каменск-Уральский
            </p>
            <p className="text-xl md:text-2xl mb-12 text-foreground/80">
              20-21 декабря 2024
            </p>

            {!liveStatus && (
              <div className="mb-12">
                <p className="text-lg mb-6 text-muted-foreground">До начала гонок:</p>
                <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
                  {[
                    { label: 'Дней', value: timeLeft.days },
                    { label: 'Часов', value: timeLeft.hours },
                    { label: 'Минут', value: timeLeft.minutes },
                    { label: 'Секунд', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 min-w-[100px]">
                      <CardContent className="p-6">
                        <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
                          {item.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                <Icon name="Play" size={24} className="mr-2" />
                Смотреть трансляцию
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8 py-6">
                <Icon name="Ticket" size={24} className="mr-2" />
                Купить билеты
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="schedule" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold mb-12 text-center">
            <Icon name="Calendar" size={48} className="inline-block mr-4 text-primary" />
            Расписание гонок
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {schedule.map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-heading font-bold text-primary">{item.time}</div>
                        <div className="text-sm text-muted-foreground">{item.date}</div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-semibold mb-1">{item.round}</h3>
                        <Badge variant="outline" className="border-primary/50">
                          <Icon name="Clock" size={14} className="mr-1" />
                          {item.status === 'upcoming' ? 'Предстоит' : 'Завершено'}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                      <Icon name="Info" size={18} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="racers" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold mb-12 text-center">
            <Icon name="Users" size={48} className="inline-block mr-4 text-secondary" />
            Гонщики и команды
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {racers.map((racer) => (
              <Card key={racer.id} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-secondary/50 transition-all hover:scale-105 overflow-hidden group">
                <div className="h-3 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-6xl font-heading font-bold text-primary/20 group-hover:text-secondary/40 transition-colors">
                      #{racer.number}
                    </div>
                    <div className="text-4xl">{racer.country}</div>
                  </div>
                  <CardTitle className="text-2xl font-heading">{racer.name}</CardTitle>
                  <CardDescription className="text-lg">{racer.team}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Очки в сезоне</div>
                      <div className="text-3xl font-heading font-bold text-accent">{racer.points}</div>
                    </div>
                    <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                      <Icon name="User" size={18} className="mr-2" />
                      Профиль
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <h2 className="text-5xl font-heading font-bold text-center">
              <Icon name="Trophy" size={48} className="inline-block mr-4 text-accent" />
              Результаты и рейтинги
            </h2>
            <Badge className="animate-pulse-glow bg-secondary text-secondary-foreground">
              <Icon name="Radio" size={16} className="mr-2" />
              Live
            </Badge>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Последний заезд</CardTitle>
                <CardDescription>Обновлено только что</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.map((result) => (
                    <div 
                      key={result.position}
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all ${
                        result.position <= 3 
                          ? 'bg-accent/10 border-accent/50' 
                          : 'bg-background/50 border-border'
                      }`}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`text-4xl font-heading font-bold ${
                          result.position === 1 ? 'text-secondary' :
                          result.position === 2 ? 'text-primary' :
                          result.position === 3 ? 'text-accent' :
                          'text-muted-foreground'
                        }`}>
                          {result.position}
                        </div>
                        <div>
                          <div className="text-xl font-semibold">{result.racer}</div>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <Icon name="Timer" size={14} />
                            {result.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-heading font-bold text-primary">{result.points}</div>
                          <div className="text-xs text-muted-foreground">очков</div>
                        </div>
                        <Icon 
                          name={result.trend === 'up' ? 'TrendingUp' : result.trend === 'down' ? 'TrendingDown' : 'Minus'} 
                          size={24}
                          className={
                            result.trend === 'up' ? 'text-secondary' :
                            result.trend === 'down' ? 'text-destructive' :
                            'text-muted-foreground'
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold mb-12 text-center">
            <Icon name="Camera" size={48} className="inline-block mr-4 text-primary" />
            Фото и видео
          </h2>
          
          <Tabs defaultValue="photos" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="photos" className="text-lg">
                <Icon name="Image" size={20} className="mr-2" />
                Фотографии
              </TabsTrigger>
              <TabsTrigger value="videos" className="text-lg">
                <Icon name="Video" size={20} className="mr-2" />
                Видео
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="photos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  'https://cdn.poehali.dev/projects/6df9a87a-959a-4aba-a7cc-5384f4a6a275/files/65acc69e-b7ea-412f-b888-11d511146e3d.jpg',
                  'https://cdn.poehali.dev/projects/6df9a87a-959a-4aba-a7cc-5384f4a6a275/files/cc5570f6-99c3-4c1d-ace6-10f264efdca5.jpg',
                  'https://cdn.poehali.dev/projects/6df9a87a-959a-4aba-a7cc-5384f4a6a275/files/c957e6ad-b3dc-495c-9dcb-01b751aa2c51.jpg'
                ].map((img, index) => (
                  <Card key={index} className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform">
                    <div 
                      className="aspect-video bg-cover bg-center"
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className="overflow-hidden group cursor-pointer hover:scale-105 transition-transform">
                    <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                      <Icon name="Play" size={64} className="text-secondary/50 group-hover:text-secondary transition-colors" />
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="tickets" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold mb-12 text-center">
            <Icon name="Ticket" size={48} className="inline-block mr-4 text-secondary" />
            Покупка билетов
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Стандарт', price: '1500', features: ['Общая зона', 'Один день', 'Доступ к фудкорту'] },
              { name: 'VIP', price: '3500', features: ['VIP-зона', 'Оба дня', 'Питание включено', 'Встреча с гонщиками'], highlight: true },
              { name: 'Семейный', price: '4000', features: ['2 взрослых + 2 детей', 'Оба дня', 'Сувениры в подарок'] }
            ].map((ticket, index) => (
              <Card 
                key={index} 
                className={`${
                  ticket.highlight 
                    ? 'border-secondary/50 bg-gradient-to-br from-secondary/10 to-accent/10 scale-105' 
                    : 'bg-card/50 backdrop-blur-sm border-primary/20'
                } hover:scale-110 transition-transform`}
              >
                <CardHeader>
                  {ticket.highlight && (
                    <Badge className="mb-4 w-fit bg-secondary text-secondary-foreground">Популярный</Badge>
                  )}
                  <CardTitle className="text-3xl font-heading">{ticket.name}</CardTitle>
                  <div className="text-5xl font-heading font-bold text-primary mt-4">
                    {ticket.price} ₽
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Купить билет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-heading font-bold mb-12 text-center">
            <Icon name="MapPin" size={48} className="inline-block mr-4 text-accent" />
            Контакты и место проведения
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Локация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Ледовый стадион "Арена Каменск"<br/>ул. Ленина, 123, Каменск-Уральский</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (3439) 123-456</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@icespeedway.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Время работы</h3>
                    <p className="text-muted-foreground">20 декабря: 10:00 - 20:00<br/>21 декабря: 12:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/20 to-accent/20 border-primary/30 flex items-center justify-center">
              <CardContent className="text-center py-12">
                <Icon name="Map" size={120} className="mx-auto mb-6 text-primary/50" />
                <p className="text-xl text-muted-foreground">Интерактивная карта</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Icon name="Zap" size={32} className="text-primary" />
              <div>
                <h3 className="text-xl font-heading font-bold">ICE SPEEDWAY 2024</h3>
                <p className="text-sm text-muted-foreground">Каменск-Уральский</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              {['Facebook', 'Instagram', 'Youtube', 'Twitter'].map((social) => (
                <Button key={social} variant="outline" size="icon" className="border-primary/50 hover:bg-primary/10">
                  <Icon name={social as any} size={20} />
                </Button>
              ))}
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 Ice Speedway. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;