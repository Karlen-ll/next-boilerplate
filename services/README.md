### /services/
В этой директории хранятся вспомогательные классы для работы внутри приложения.
К примеру, мы можем создать класс-обертку `Api` для работы с REST API приложения.

Обращаем внимание, что здесь должна находится только реализация классов, а не экземпляры.
Экземпляры классов помещаем в `/utils/`.