import { Card } from '@/components/ui/card'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <Card className="max-w-4xl w-full p-8">
        <h2 className="text-3xl font-semibold mb-4">
          About the Product Management Dashboard
        </h2>

        <p className="text-gray-600 mb-6">
          A simple dashboard to manage your products. Add, edit, delete, filter
          and search products easily.
        </p>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Created by{' '}
          <a
            href="https://aloksingh.co/"
            className="text-blue-500 hover:underline"
          >
            Alok Singh
          </a>
        </p>
      </Card>
    </div>
  )
}

export default About
