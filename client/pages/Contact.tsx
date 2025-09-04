import Header from "@/components/Header";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-lavender-100">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Контакты</h1>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-600 mb-4">
              Эта страница находится в разработке.
            </p>
            <p className="text-gray-600">
              Здесь будет контактная информация для связи и записи на сеансы.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
